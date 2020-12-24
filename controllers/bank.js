const Complaints = require("../models/User");
const User = require("../models/User");
const Withdrawl = require("../models/Withdrawl");
const bcrypt = require("bcryptjs");
const Recharge = require("../models/Recharge");
const Recharging = require("../models/Recharging");
const unirest = require('unirest');
var crypto = require('crypto');
const Razorpay = require('razorpay');
exports.postBank = (req, res, next) => {

    const comp = req.body;
    console.log(comp);
    User.findById(req.userFromToken._id, (err, user) => {

        user.bank_card.push(comp);
        user.save();
        return res.status(200).json({ message: "Add succesfully" });
    })
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.deleteBank = (req, res, next) => {
    const key = req.body.key;
    User.findById(req.userFromToken._id, (err, user) => {
        user.bank_card.splice(key, 1);

        user.save();
        return res.status(200).json({ message: "Remove succesfully" });
    })

    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};


exports.postWithdrawl = async (req, res, next) => {
    const amount = Math.abs(parseFloat(req.body.amount));
    if (amount < 100)
        return res.status(400).json({ error: "Only more than 100 inr allowed" });
    var time = parseInt((new Date()).getTime());
    const old = await Withdrawl.find({ user: req.userFromToken._id }).sort('-createdAt');
    if (old.length !== 0) {
        console.log(time);
        console.log(parseInt((new Date(old[0].createdAt)).getTime()));

        if (time - parseInt((new Date(old[0].createdAt)).getTime()) < 3600000) {
            return res.status(400).json({ error: "Withdraw is only allowed 1 time per hour!" });
        }
    }


    User.findById(req.userFromToken._id, (err, user) => {
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {

            if (isMatch) {
                if (parseFloat(user.budget) < amount)
                    return res.status(401).json({ error: "You don't have enough money!" });
                const comp = {};
                comp.user = user._id;
                comp.bank = req.body.bank;
                comp.money = amount;
                user.budget = parseFloat(user.budget) - amount;
                user.save();
                new Withdrawl(comp).save();
                return res.status(200).json({ message: 'success! It will be take a few hours to transfer.' });
            } else return res.status(401).json({ error: "Password incorrect!" });
        });

    })
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.getAdminWithdrawl = (req, res, next) => {


    (async () => {
        var withdrawls = await Withdrawl.find({ '$or': [{ status: '0' }, { status: '1' }] }).sort("-createdAt");
        const res_data = [];
        for (var i = 0; i < withdrawls.length; i++) {
            try {
                const aa = await User.findById(withdrawls[i].user);
                res_data[i] = {};
                res_data[i]._id = withdrawls[i]._id;
                res_data[i].status = withdrawls[i].status;
                res_data[i].userId = aa._id;
                res_data[i].userNickname = aa.nickname;
                res_data[i].userPhone = aa.phone;
                res_data[i].amount = withdrawls[i].money;
                res_data[i].actual_name = aa.bank_card[withdrawls[i].bank].actual_name;
                res_data[i].ifsc_code = aa.bank_card[withdrawls[i].bank].ifsc_code;
                res_data[i].bank_name = aa.bank_card[withdrawls[i].bank].bank_name;
                res_data[i].bank_account = aa.bank_card[withdrawls[i].bank].bank_account;
                res_data[i].state_territory = aa.bank_card[withdrawls[i].bank].state_territory;
                res_data[i].city = aa.bank_card[withdrawls[i].bank].city;
                res_data[i].address = aa.bank_card[withdrawls[i].bank].address;
                res_data[i].mobile_number = aa.bank_card[withdrawls[i].bank].mobile_number;
                res_data[i].email = aa.bank_card[withdrawls[i].bank].email;
                res_data[i].upi_account = aa.bank_card[withdrawls[i].bank].upi_account;
            } catch (ex) {
                continue;
            }

        }

        return res.status(200).json({ data: res_data });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.postAdminWithdrawl = (req, res, next) => {


    (async () => {
        var withdrawls = await Withdrawl.findById(req.body.id);
        var user = await User.findById(withdrawls.user);
        // console.log("budget="+user.budget);
        // console.log("withdraw="+withdrawls.money);
        // console.log(req.body.status);
        // console.log(req.body.status);
        switch (req.body.status) {
            case 2: {
                //decline
                //  console.log('decline');
                user.budget = parseFloat(user.budget) + parseFloat(withdrawls.money);
                withdrawls.status = 2;
                const saved_w = await withdrawls.save();
                // console.log("withdraw status="+saved_w.status);
                break;
            }
            case 1: {
                //approve
                //  console.log('approve');
                withdrawls.status = 1;
                const saved_w = await withdrawls.save();
                // console.log("withdraw status="+saved_w.status);
                break;
            }
            case 3: {
                //complete
                // console.log('complete');
                withdrawls.status = 3;
                const saved_w = await withdrawls.save();
                // console.log("withdraw status="+saved_w.status);
                break;
            }
            case 4: {
                //error
                // console.log('error');
                user.budget = parseFloat(user.budget) + parseFloat(withdrawls.money);
                withdrawls.status = 4;
                const saved_w = await withdrawls.save();
                // console.log("withdraw status="+saved_w.status);

                break;
            }
        }
        // console.log('user.budget= '+user.budget);
        try {
            const saved = await user.save();
            // console.log('saved user.budget='+saved.budget);
        } catch (ex) {
            console.log(ex);
        }

        return res.status(200).json({ message: 'ok' });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};



exports.getAdminRecharge = (req, res, next) => {


    (async () => {
        var recharges = await Recharge.find({}).sort("-createdAt");
        const res_data = [];
        for (var i = 0; i < recharges.length; i++) {
            try {
                const aa = await User.findById(recharges[i].user);
                res_data[i] = {};
                res_data[i]._id = recharges[i]._id;
                res_data[i].status = recharges[i].status;
                res_data[i].orderID = recharges[i].orderID;
                res_data[i].createdAt = recharges[i].createdAt;
                res_data[i].userId = aa._id;
                res_data[i].userNickname = aa.nickname;
                res_data[i].userPhone = aa.phone;
                res_data[i].money = recharges[i].money;

            } catch (ex) {
                continue;
            }

        }

        return res.status(200).json({ data: res_data });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.postAdminRecharge = (req, res, next) => {


    (async () => {
        var recharge = await Recharge.findById(req.body.id);
        var user = await User.findById(recharge.user);

        // console.log("budget="+user.budget);
        // console.log("withdraw="+recharge.money);
        // console.log(req.body.status);
        // console.log(req.body.status);
        if (req.body.status == 1 && recharge.status != 1)
            user.budget = parseFloat(user.budget) + parseFloat(recharge.money);
        else if (req.body.status == -1 && recharge.status == 1)
            user.budget = parseFloat(user.budget) - parseFloat(recharge.money);
        recharge.status = req.body.status;

        // console.log('user.budget= '+user.budget);
        try {
            const saved_w = await recharge.save();
            const saved = await user.save();
            // console.log('saved user.budget='+saved.budget);
        } catch (ex) {
            console.log(ex);
        }


        var recharges = await Recharge.find({}).sort("-createdAt");
        const res_data = [];
        for (var i = 0; i < recharges.length; i++) {
            try {
                const aa = await User.findById(recharges[i].user);
                res_data[i] = {};
                res_data[i]._id = recharges[i]._id;
                res_data[i].status = recharges[i].status;
                res_data[i].orderID = recharges[i].orderID;
                res_data[i].createdAt = recharges[i].createdAt;
                res_data[i].userId = aa._id;
                res_data[i].userNickname = aa.nickname;
                res_data[i].userPhone = aa.phone;
                res_data[i].money = recharges[i].money;

            } catch (ex) {
                continue;
            }

        }

        return res.status(200).json({ res_data });

    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};



exports.getWithdrawlList = (req, res, next) => {


    (async () => {
        var withdrawls = await Withdrawl.find({ user: req.userFromToken });

        return res.status(200).json({ data: withdrawls });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.getRechargeList = (req, res, next) => {


    (async () => {
        var recharges = await Recharge.find({ user: req.userFromToken });

        return res.status(200).json({ data: recharges });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.postRecharge = async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);

    console.log("amount=" + req.body.money);
    if (req.body.money === "" || req.body.email === "") {
        return res.status(400).json({ error: "Please input correct money" });
    }
    const user = await User.findById(req.userFromToken._id)
    const comp = {};
    comp.user = req.userFromToken._id;
    comp.order_amount = Math.abs(parseFloat(req.body.money));
    comp.pname = req.body.name;
    comp.pemail = req.body.email;
    comp.phone = req.body.phone;
    comp.busi_code = req.body.method;
    user.email = req.body.email;
    const saved = await user.save();
    const data = await new Recharging(comp).save();
    // const sign = crypto.createHash('md5')
    //     .update(`busi_code=${data.busi_code}&ccy_no="INR"&countryCode="IND"&goods="Make deposit"&mer_no=${process.env.PAYMENT_NO}` +
    //         `&mer_order_no=${data.id}&notifyUrl=${process.env.APP_URL + "/notify-recharge"}` +
    //         `&order_amount=${data.order_amount}&pageUrl=${process.env.APP_URL + "/response-recharge"}` +
    //         `&pemail=${data.pemail}&phone=${data.phone}&pname=${data.pname}&key=${process.env.PAYMENT_KEY}`).digest("hex");
    let body={
        busi_code:data.busi_code,
        ccy_no:"INR",
        countryCode:"IND",
        
        goods:"Make deposit",
        mer_no:process.env.PAYMENT_NO,
        mer_order_no:data.id,
        notifyUrl:process.env.APP_URL + "api/notify-recharge",
        order_amount:data.order_amount,
        pageUrl:process.env.APP_URL + "api/response-recharge",
        pemail:data.pemail,
        phone:data.phone,
        pname:data.pname,
        timeout_express:'30m'
        
    }

    const sign = crypto.createHash('md5')
    .update(`busi_code=${body.busi_code}&ccy_no=INR&countryCode=IND&goods=${body.goods}&mer_no=${body.mer_no}` +
        `&mer_order_no=${body.mer_order_no}&notifyUrl=${body.notifyUrl}` +
        `&order_amount=${body.order_amount}&pageUrl=${body.pageUrl}` +
        `&pemail=${body.pemail}&phone=${body.phone}&pname=${body.pname}&key=${process.env.PAYMENT_KEY}`).digest("hex");
        console.log(`busi_code=${body.busi_code}&ccy_no="INR"&countryCode="IND"&goods=${body.goods}&mer_no=${body.mer_no}` +
        `&mer_order_no=${body.mer_order_no}&notifyUrl=${body.notifyUrl}` +
        `&order_amount=${body.order_amount}&pageUrl=${body.pageUrl}` +
        `&pemail=${body.pemail}&phone=${body.phone}&pname=${body.pname}&timeout_express=30m&key=${process.env.PAYMENT_KEY}`);
    // console.log(`busi_code=${data.busi_code}&goods="Make deposit"&mer_no=${process.env.PAYMENT_NO}` +
    //     `&mer_order_no=${data.id}&notifyUrl=${process.env.APP_URL + "/notify-recharge"}` +
    //     `&order_amount=${data.order_amount}&pageUrl=${process.env.APP_URL + "/response-recharge"}` +
    //     `&pemail=${data.pemail}&phone=${data.phone}&pname=${data.pname}&key=${process.env.PAYMENT_KEY}`);
    // console.log(sign);
    data.sign=sign;
    await sign.save();
    body={...body, sign};
    // console.log(body);
    await unirest
    .post(process.env.PAYMENT_DEPOSIT_URL)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .encoding('utf-8')
    .send(body)
    .then(function (response) {
        if(response.body.status=='SUCCESS'){
            return res.status(200).json({url:response.body.order_data});
        }else{
            return res.status(400).json({});
        }
    })

   
        
        
        
        
       
};
exports.postResponseRecharge = async (req, res, next) => {    
    return res.redirect('/my/recharge');

};
exports.postNotifyRecharge = (req, res, next) => {
    try{
        console.log(req.body);
        console.log(req.body.order_amount);
        const recharging=await Recharging.findById(req.body.mer_order_no);
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if(recharging && recharging.sign==req.body.sign && ip=="149.129.214.64"){
            const recharge=new Recharge();
            recharge.user=recharging.user;
            recharge.phone=recharging.phone;
            recharge.money=req.body.pay_amount;
            recharge.status=1;
            await recharge.save();
            const user=await User.findById(recharge.user);
            user.budget+=parseInt(recharge.money);
            await user.save();
            return res.json({});
        }
        return res.json({});
    }catch(err){
        const recharging=await Recharging.find(req.body.mer_order_no);
    
        console.log(sign);
        return res.redirect('/my/recharge');
    }
    

    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.getBudget = (req, res, next) => {


    (async () => {
        var user = await User.findById(req.userFromToken);

        return res.status(200).json({ budget: user.budget });
    })();


    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};