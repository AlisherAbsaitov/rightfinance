import React, { useEffect, useState } from "react";
import { db } from "../../firabese/Firabase";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { Table } from "antd";
import Loader from "../../loader/Loader";
export default function AdminMain() {
  const dbref = collection(db, "CRUD");
  const [fetchData, setFetchData] = useState([]);
  const [loader, setLoader] = useState(true);
  const fetch = async () => {
    const snapshot = await getDocs(dbref);
    setLoader(false);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFetchData(fetchdata);
  };

  const postDelete=async (id)=>{
    const delref = doc(dbref,id)
    try{
      await deleteDoc(delref)
      alert("O'chirildi")
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  const darSourse = fetchData.map((item, index) => {
    return {
      key: index + 1,
      name: item.username,
      phone: item.phone,
      delate: <button onClick={()=>postDelete(item.id)} type="Button" className="btn btn-danger">Delate</button>,
    };
  });

  const columns = [
    {
      title: "#",
      key: "key",
      dataIndex: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Delate",
      dataIndex: "delate",
      key: "delate",
    },
  ];

  return (
    <React.Fragment>
      {loader ? (
        <Loader />
      ) : (
        <div style={{ width: "100%", padding: "20px" }}>
          <Table dataSource={darSourse} columns={columns} size={"small"} pagination={{ defaultPageSize: 10}}/>
        </div>
      )}
    </React.Fragment>
  );
}
