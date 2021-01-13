import Page from 'components/Page';
import React, { useState, useEffect, useRef } from 'react';
import {
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Label,
  Button,
  Row,
} from 'reactstrap';
import { FaArrowCircleLeft, FaSearch, FaKey, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typography from '../components/Typography';
import PageSpinner from '../components/PageSpinner';
import bn from 'utils/bemnames';
const bem = bn.create('page');
const RechargePage = props => {
  const btn = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem('auth')).user.email,
  );
  const [phone, setPhone] = useState(
    JSON.parse(localStorage.getItem('auth')).user.phone,
  );
  const [name, setName] = useState('');
  const [method, setMethod] = useState('KBANK');
  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem('auth')).user.budget,
  );
  const [money, setMoney] = useState('');
  const [account, setAccount] = useState('');
  const [accountItems, setAccountItems] = useState('');
  const apply = () => {
    (async () => {
      if (
        money == '' ||
        email == '' ||
        phone == '' ||
        name == '' ||
        method == ''
      )
        return;
      console.log(method);
      const response = await fetch('/api/recharge', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: JSON.parse(localStorage.getItem('auth')).userToken,
        },
        body: JSON.stringify({ money, email, phone, name, method }),
      });
      const data = await response.json();
      if (response.status == 200) {
        window.location.href = data.url;
        // f.submit();
      } else alert(data.error);
    })();
  };
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/budget', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: JSON.parse(localStorage.getItem('auth')).userToken,
        },
      });
      if (response.status == 401) props.history.push('/login');
      const data = await response.json();
      var tmp = JSON.parse(localStorage.getItem('auth'));
      tmp.user.budget = data.budget;
      localStorage.setItem('auth', JSON.stringify(tmp));
      setBudget(data.budget);
      const response1 = await fetch('/static/account.json', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const data1 = await response1.json();
      setAccount(data1);
      setAccountItems(Object.getOwnPropertyNames(data1));
    })();
  }, []);
  return (
    <Page
      title={
        <>
          <Link to="/my">
            <Typography type="h4" className={bem.e('title')}>
              <FaArrowCircleLeft /> Recharge
            </Typography>
          </Link>
          <Link color="link" to="/my/rechargeList" style={{ padding: '20px' }}>
            <FaBars />
          </Link>
        </>
      }
      className="MyPage"
    >
      <Row>
        <Col md={12} style={{ textAlign: 'center' }} className={'mt-3'}>
          <h3>Balance: ₹ {budget}</h3>
        </Col>

        {/* <Col xl={12} lg={12} md={12} style={{textAlign:'center'}}>
          <img src="/img/bank/bank.jpg" style={{width:'300px'}} />
        </Col> */}
        {/* <Col xl={12} lg={12} md={12} style={{padding:"0 30px"}}>
          {accountItems && accountItems.map((ele,key)=>(
            <h6 key={key}>{ele+' '}:{' '+account[ele]}</h6> 
          ))}
          <h6></h6>
        </Col> */}
        <Col xl={12} lg={12} md={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">₹</span>
            </InputGroupAddon>
            <Input
              value={money}
              type="number"
              max="15000"
              min="0"
              placeholder="Enter Recharge amount"
              onChange={e => {
                setMoney(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
        <Col xl={12} lg={12} md={12}>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(100)}
          >
            ₹ 100
          </Button>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(1000)}
          >
            ₹ 1000
          </Button>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(2000)}
          >
            ₹ 2000
          </Button>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(5000)}
          >
            ₹ 5000
          </Button>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(10000)}
          >
            ₹ 10000
          </Button>
          <Button
            color="primary"
            className={'ml-3 mr-3 mt-2'}
            style={{ width: '80px', padding: '4px 4px' }}
            onClick={() => setMoney(15000)}
          >
            ₹ 15000
          </Button>
        </Col>
        <Col xl={12} lg={12} md={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">Email</span>
            </InputGroupAddon>
            <Input
              value={email}
              placeholder="Write your Email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
        <Col xl={12} lg={12} md={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">Phone</span>
            </InputGroupAddon>
            <Input
              value={phone}
              placeholder="Write your phone number"
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
        <Col xl={12} lg={12} md={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">Name</span>
            </InputGroupAddon>
            <Input
              value={name}
              placeholder="Write your name"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </InputGroup>
        </Col>
        <Col xl={12} lg={12} md={12}>
          <FormGroup>
            <Label for="exampleSelect">Payment Method</Label>
            <Input type="select" name="method" id="exampleSelect" value={method} onChange={(e => setMethod(e.target.value))}>
              <option value="KBANK">KASIKORNBANK PCL</option>
              <option value="BBL">BANGKOK BANK PUBLIC COMPANY LTD.</option>
              <option value="BAAC">BANK FOR AGRICULTURE AND AGRICULTURAL CO-OPERATIVES</option>
              <option value="BOA">BANK OF AMERICA NT&SA</option>
              <option value="BAY">BANK OF AYUDHAYA PUBLIC COMPANY LTD.</option>
              <option value="BOC">Bank of China (Thai) PCL</option>
              <option value="BNPP">BNP PARIBAS BANGKOK BRANCH</option>
              <option value="CIMB">CIMB THAI BANK PUBLIC COMPANY LTD.</option>
              <option value="CITI">CITI BANK N.A.</option>
              <option value="DB">Deutsche Bank AG</option>
              <option value="GHB">GOVERNMENT HOUSING BANK</option>
              <option value="ICBC">INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PCL</option>
              <option value="TIBT">ISLAMIC BANK OF THAILAND</option>
              <option value="CHAS">JPMorgan Chase Bank, Bangkok Branch</option>
              <option value="KKB">KIATNAKIN BANK PCL</option>
              <option value="KTB">KRUNG THAI BANK PUBLIC COMPANY LTD.</option>
              <option value="LHBA">Land and Houses Bank</option>
              <option value="MEGA">MEGA INTERNATIONAL COMMERCIAL BANK</option>
              <option value="MHCB">MIZUHO CORPORATE BANK</option>
              <option value="SCBT">STANDARD CHARTERED BANK THAI PCL.</option>
              <option value="SMTB">Sumitomo Mitsui Trust Bank (Thai) PCL.</option>
              <option value="TBNK">Thanachart Bank Public Company Limited</option>
              <option value="GSB">THE GOVERNMENT SAVING BANK</option>
              <option value="HSBC">THE HONGKONG & SHANGHAI CORPORATION LTD.</option>
              <option value="SCB">THE SIAM COMMERCIAL BANK PUBLIC COMPANY</option>
              <option value="SMBC">THE SUMITOMO MITSU BANKING CORPORATION</option>
              <option value="TCRB">THE THAI CREDIT RETAIL BANK</option>
              <option value="TISCO">TISCO Bank PCL</option>
              <option value="TMB">TMB BANK PUBLIC COMPANY LTD.</option>
              <option value="UOB">UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LTD.</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={12} style={{ textAlign: 'center' }} className={'mt-3'}>
          {!isLoading ? (
            <Button onClick={apply} color="success">
              {' '}
              Add to Wallet{' '}
            </Button>
          ) : (
              <PageSpinner />
            )}
        </Col>
        <div
          className="mt-3 col-md-12"
          ref={btn}
          style={{ textAlign: 'center' }}
        ></div>
      </Row>
      <Row>
        <div style={{ height: '100px' }}></div>
      </Row>
    </Page>
  );
};

export default RechargePage;
