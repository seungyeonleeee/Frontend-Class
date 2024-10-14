import React, { useState, useEffect } from "react";
// 24
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import ContactItem from "./ContactItem";

const ContactList = () => {
  // 25
  // const contactLists = useSelector((state) => state.contactList);
  // console.log(contactLists);

  // 37
  const [filteredList, setFilteredList] = useState([]);

  // 35
  const { contactList, keyword } = useSelector((state) => state);
  // console.log(test); // contactList, keyword 두 요소 다 들어옴
  // console.log(contactList, keyword);

  // 36
  useEffect(() => {
    if (keyword !== "") {
      // 39
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      // 38
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {/* // 26 */}
      {/* {contactLists.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))} */}
      {/* // 40 */}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
