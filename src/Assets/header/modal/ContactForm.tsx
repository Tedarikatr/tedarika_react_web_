import React from 'react';
import { Modal, Input, Form, Button, message } from 'antd';
import axios from 'axios';

interface Modal2Props {
  modal2Open: boolean;
  setModal2Open: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<Modal2Props> = ({ modal2Open, setModal2Open }) => {
  const [form] = Form.useForm();

  // API'ye verileri göndermek için submit fonksiyonu
  const handleSubmit = async () => {
    try {
      // Form doğrulama
      const values = await form.validateFields();

      const data = {
        fullName: values.fullName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        messageSubject: values.messageSubject,
        messageContent: values.messageContent,
      };

      // API'ye POST isteği
      const response = await axios.post('https://formtedarika-cra7f6bbgrgfbzgm.westeurope-01.azurewebsites.net/api/', data);
      console.log(response);

      message.success('Form başarıyla gönderildi!');
      setModal2Open(false);

      // State'leri Temizle
      form.resetFields();
    } catch (error) {
      if (error instanceof Error) {
        // Eğer bir doğrulama hatası varsa
        message.error('Form gönderilirken bir hata oluştu.');
        console.error("API Hatası:", error);
      } else {
        message.error('Lütfen tüm gerekli alanları doldurun.');
      }
    }
  };

  return (
    <Modal
      title="Tedarika İletişim Formu"
      centered
      open={modal2Open}
      onCancel={() => setModal2Open(false)}
      footer={[
        <Button key="back" onClick={() => setModal2Open(false)}>
          İptal
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Gönder
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Ad - Soyad"
          name="fullName"
          rules={[{ required: true, message: 'Lütfen adınızı ve soyadınızı girin!' }]}
        >
          <Input placeholder="Ad - Soyad" />
        </Form.Item>

        <Form.Item
          label="Telefon Numarası"
          name="phoneNumber"
          rules={[{ required: true, message: 'Lütfen telefon numaranızı girin!' }]}
        >
          <Input placeholder="Telefon Numarası" />
        </Form.Item>

        <Form.Item
          label="E-Posta Adresi"
          name="email"
          rules={[
            { required: true, message: 'Lütfen e-posta adresinizi girin!' },
            { type: 'email', message: 'Geçerli bir e-posta adresi girin!' },
          ]}
        >
          <Input placeholder="E-Posta Adresi" />
        </Form.Item>

        <Form.Item
          label="Mesaj Konusu"
          name="messageSubject"
          rules={[{ required: true, message: 'Lütfen mesaj konusunu girin!' }]}
        >
          <Input placeholder="Mesaj Konusu" />
        </Form.Item>

        <Form.Item
          label="Mesaj"
          name="messageContent"
          rules={[{ required: true, message: 'Lütfen mesajınızı girin!' }]}
        >
          <Input.TextArea placeholder="Mesaj" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactForm;
