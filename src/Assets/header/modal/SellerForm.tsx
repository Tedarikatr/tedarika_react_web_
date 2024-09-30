import React, { useState } from 'react';
import { Modal, Input, Form, Button, Select, DatePicker, Checkbox, message } from 'antd';
import axios from 'axios';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
const { TextArea } = Input;
const { Option } = Select;

interface Modal1Props {
  modal1Open: boolean;
  setModal1Open: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal1: React.FC<Modal1Props> = ({ modal1Open, setModal1Open }) => {
  const [form] = Form.useForm();
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState<boolean>(false);
  const [sellerAgreementAccepted, setSellerAgreementAccepted] = useState<boolean>(false);
  const [kvkkConsentGiven, setKvkkConsentGiven] = useState<boolean>(false);

  const handleSubmit = async () => {
    const errors = form.getFieldsError().filter(({ errors }) => errors.length).map(({ name }) => name);
    
    if (errors.length > 0) {
      message.warning('Lütfen boş alanları doldurun: ' + errors.join(', '));
      return;
    }

    try {
      const values = await form.validateFields(); // Doğrulama başarılıysa değerleri alır

      // Ek alanlar ekleniyor (Checkbox değerleri)
      const data = {
        ...values,
        termsAndConditionsAccepted,
        sellerAgreementAccepted,
        kvkkConsentGiven
      };

      const response = await axios.post('https://formtedarika-cra7f6bbgrgfbzgm.westeurope-01.azurewebsites.net/api/sellercontactform/submit', data);
      console.log(response);
      
      message.success('Form başarıyla gönderildi!');
      setModal1Open(false);

      form.resetFields(); // Formu sıfırlıyoruz
      setTermsAndConditionsAccepted(false);
      setSellerAgreementAccepted(false);
      setKvkkConsentGiven(false);
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
      title="Tedarika Satıcı Kaydı"
      centered
      open={modal1Open}
      onOk={handleSubmit}
      onCancel={() => setModal1Open(false)}
      style={{ height: "800px", overflow: "scroll" }}
      footer={[
        <Button key="back" onClick={() => setModal1Open(false)}>
          İptal
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Gönder
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Şirket Adı"
          name="companyName"
          rules={[{ required: true, message: 'Lütfen şirket adını girin' }]}
        >
          <Input placeholder="Şirket Adı" />
        </Form.Item>

        <Form.Item
          label="Vergi Numarası"
          name="taxNumber"
          rules={[{ required: true, message: 'Lütfen vergi numarasını girin' }]}
        >
          <Input placeholder="Vergi Numarası" />
        </Form.Item>

        <Form.Item
          label="Şirket Tipi"
          name="companyType"
          rules={[{ required: true, message: 'Lütfen şirket tipini seçin' }]}
        >
          <Select placeholder="Şirket Tipi">
            <Option value="A.Ş.">A.Ş.</Option>
            <Option value="Ltd. Şti.">Ltd. Şti.</Option>
            <Option value="Şahıs Şirketi">Şahıs Şirketi</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Faaliyet Gösterilen İş Alanı"
          name="businessField"
          rules={[{ required: true, message: 'Lütfen iş alanını girin' }]}
        >
          <Input placeholder="Faaliyet Gösterilen İş Alanı" />
        </Form.Item>

        <Form.Item
          label="Kuruluş Tarihi"
          name="establishmentDate"
          rules={[{ required: true, message: 'Lütfen kuruluş tarihini seçin' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Şirket Adresi"
          name="companyAddress"
          rules={[{ required: true, message: 'Lütfen şirket adresini girin' }]}
        >
          <TextArea placeholder="Şirket Adresi" />
        </Form.Item>

        <Form.Item
          label="Şirket Temsilcisi Adı"
          name="representativeName"
          rules={[{ required: true, message: 'Lütfen şirket temsilcisi adını girin' }]}
        >
          <Input placeholder="Şirket Temsilcisi Adı" />
        </Form.Item>

        <Form.Item
          label="Şirket Temsilcisi Rolü"
          name="representativeRole"
          rules={[{ required: true, message: 'Lütfen temsilcinin rolünü girin' }]}
        >
          <Input placeholder="Şirket Temsilcisi Rolü" />
        </Form.Item>

        <Form.Item
          label="Temsilci E-Posta Adresi"
          name="representativeEmail"
          rules={[
            { required: true, message: 'Lütfen e-posta adresini girin' },
            { type: 'email', message: 'Geçerli bir e-posta adresi girin' },
          ]}
        >
          <Input placeholder="Temsilci E-Posta Adresi" />
        </Form.Item>

        <Form.Item
          label="Temsilci Telefon Numarası"
          name="representativePhone"
          rules={[{ required: true, message: 'Lütfen telefon numarasını girin' }]}
        >
          <Input placeholder="Temsilci Telefon Numarası" />
        </Form.Item>

        <Form.Item
          label="Ürün Kategorileri"
          name="productCategories"
          rules={[{ required: true, message: 'Lütfen en az bir ürün kategorisi seçin' }]}
        >
          <Select mode="tags" placeholder="Ürün Kategorileri">
            <Option value="Elektronik">Elektronik</Option>
            <Option value="Tekstil">Tekstil</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Aylık Stok Kapasitesi"
          name="monthlyStockCapacity"
          rules={[{ required: true, message: 'Lütfen aylık stok kapasitesini girin' }]}
        >
          <Input type="number" placeholder="Aylık Stok Kapasitesi" />
        </Form.Item>

        <Form.Item
          label="Üretim Kapasitesi"
          name="productionCapacity"
          rules={[{ required: true, message: 'Lütfen üretim kapasitesini girin' }]}
        >
          <Input type="number" placeholder="Üretim Kapasitesi" />
        </Form.Item>

        <Form.Item
          label="Ortalama Sevkiyat Süresi (gün)"
          name="averageShippingTime"
          rules={[{ required: true, message: 'Lütfen ortalama sevkiyat süresini girin' }]}
        >
          <Input type="number" placeholder="Ortalama Sevkiyat Süresi" />
        </Form.Item>

        <Form.Item
          label="Vergi Levhası"
          name="taxDocument"
          rules={[{ required: true, message: 'Lütfen vergi levhasını girin' }]}
        >
          <Input placeholder="Vergi Levhası" />
        </Form.Item>

        <Form.Item
          label="Ticaret Sicil Gazetesi"
          name="tradeRegistryGazette"
          rules={[{ required: true, message: 'Lütfen Ticaret Sicil Gazetesini girin' }]}
        >
          <Input placeholder="Ticaret Sicil Gazetesi" />
        </Form.Item>

        <Form.Item
          label="İmza Sirküleri"
          name="signatureCircular"
          rules={[{ required: true, message: 'Lütfen İmza Sirkülerini girin' }]}
        >
          <Input placeholder="İmza Sirküleri" />
        </Form.Item>

        <Form.Item
          label="Faaliyet Belgesi"
          name="activityDocument"
          rules={[{ required: true, message: 'Lütfen Faaliyet Belgesini girin' }]}
        >
          <Input placeholder="Faaliyet Belgesi" />
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={termsAndConditionsAccepted}
            onChange={(e: CheckboxChangeEvent) => setTermsAndConditionsAccepted(e.target.checked)}
          >
            Kullanım şartları
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={sellerAgreementAccepted}
            onChange={(e: CheckboxChangeEvent) => setSellerAgreementAccepted(e.target.checked)}
          >
            Satıcı sözleşmesi
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox
            checked={kvkkConsentGiven}
            onChange={(e: CheckboxChangeEvent) => setKvkkConsentGiven(e.target.checked)}
          >
            KVKK metnini okudum, kabul ediyorum.
          </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Modal1;
