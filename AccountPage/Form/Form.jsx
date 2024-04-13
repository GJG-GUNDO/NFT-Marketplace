import React, { useState, useEffect, useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

//INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/componentsIndex.js";

const Form = () => {
  const {
    currentAccount,
    accountBalance,
    transferEther,
    getAllTransactions,
    transaction,
    loading,
  } = useContext(NFTMarketplaceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>

        <div className={Style.Form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              {currentAccount}
              <input
                type="text"
           
              />
              {/* <div className={Style.Form_box_input_box_icon}> */}
                {/* <MdOutlineContentCopy /> */}
              {/* </div> */}
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username : MetaMask User</label>
           
          </div>

         

          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description : <br/><br/> This Account is Functional on the Basis of your Metamask account please refer metemask documnetation for more details <br/><br/><br/> IF you want to change your account please change meta mask wallet connect new account and refresh the site <br/><br/><br/> For account removal connect to us<br/><br/><br/></label>
           
          </div>

          
         

          {/* <div className={Style.Form_box_btn}>
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle={Style.button}
            />
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Form;
