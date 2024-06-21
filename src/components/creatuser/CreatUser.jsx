import React, { useContext } from "react";
import { Button, Form, Input, Space, message} from "antd";
import { AuthContext } from "../../utils";
import { db } from "../../firabese/Firabase";
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
export default function CreateUser() {
  const [messageApi, contextHolder] = message.useMessage();
  const { modal, setModal } = useContext(AuthContext);
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const dbref = collection(db, "CRUD");
  const addData = async (data) => {
    await addDoc(dbref, data);
  };
  const onFinish = (values) => {
    addData(values);
    setModal(false);
    form.resetFields();
    success();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const success = () => {
    messageApi.open({
      duration: 1,
      type: "success",
      content: `${t("This is a success message")}`,
    });
  };

  return (
    <Form
      autoComplete={"off"}
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={t("Name")}
        name="username"
        value=""
        type="text"
        
        rules={[
          {
            required: true,
            message: `${t("Please enter your name!")}`,
          },
        ]}
      >
        <Input autoComplete={"off"} />
      </Form.Item>

      <Form.Item
        label={`${t("Phone")}`}
        name="phone"
        extra={t("Please enter with + and county code. For example +998 .. … .. ..")}
        rules={[
          {
            required: true,
            message: `${t("Please enter your phone number!")}`,
          },
        ]}
      >
        <Input type={"number"} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 2 }}>
        <Space>
          {contextHolder}
          <Button type="primary" htmlType="submit">
            {t("Submit")}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}
