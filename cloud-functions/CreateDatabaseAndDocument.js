/**
  *
  * main() será executado quando você chamar essa ação
  *
  * @param As ações do Cloud Functions aceitam um único parâmetro, que deve ser um objeto JSON.
  *
  * @return A saída dessa ação, que deve ser um objeto JSON.
  *
  */
const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

const authenticator = new IamAuthenticator({
  apikey: 'U4NevGeSnPrj_XCdT5kEc4kkaSsXMAwA5JT-8_MjpR0N'
});

const cloudant = CloudantV1.newInstance({
  authenticator: authenticator
});

cloudant.setServiceUrl('https://7e7dd58c-d881-4056-9d1f-9d0d246b5839-bluemix.cloudantnosqldb.appdomain.cloud');

const dbName = 'lexios_dev';

async function createDatabase() {
  try {
    await cloudant.putDatabase({ db: dbName });
    console.log(`Database ${dbName} created.`);
  } catch (error) {
    if (error.status === 412) {
      console.log(`Database ${dbName} already exists.`);
    } else {
      throw error;
    }
  }
}

async function createDocument(doc) {
  try {
    let response = await cloudant.postDocument({
      db: dbName,
      document: doc,
    });
    console.log('Document created with id:', response.result.id);
    return response.result;
  } catch (error) {
    throw error;
  }
}

async function main({full_name, personal_id, identity_number, address, home_phone, cell_phone, cell_phone_whatsApp, date_of_birth, genre, profession, monthly_income, client_unibh_npj, about_unibh_npj, partner_gender, type_relationship, date_relationship_start, date_relationship_end, children_partner, number_children_partner, partner_name, partner_address, partner_date_of_birth, partner_cpf, partner_identity_number, partner_email, partner_telephone, partner_deceased, partner_date_of_death, children_another_partner, consensual_end, children_live_with, partner_monthly_income, been_victim_aggression, detail_aggression}) {
  await createDatabase();
  const newDoc = {
    _id: personal_id,
    name: full_name,
    cpf: personal_id,
    identity_number: identity_number,
    address: address,
    home_phone: home_phone,
    cell_phone: cell_phone,
    cell_phone_whatsApp: cell_phone_whatsApp,
    date_of_birth: date_of_birth,
    genre: genre,
    profession: profession,
    monthly_income: monthly_income,
    client_unibh_npj: client_unibh_npj,
    about_unibh_npj: about_unibh_npj,
    partner_gender: partner_gender,
    type_relationship: type_relationship,
    date_relationship_start: date_relationship_start,
    date_relationship_end: date_relationship_end,
    children_partner: children_partner,
    number_children_partner: number_children_partner,
    partner_name: partner_name,
    partner_address: partner_address,
    partner_date_of_birth: partner_date_of_birth,
    partner_cpf: partner_cpf,
    partner_identity_number: partner_identity_number,
    partner_email: partner_email,
    partner_telephone: partner_telephone,
    partner_deceased: partner_deceased,
    partner_date_of_death: partner_date_of_death,
    children_another_partner: children_another_partner,
    consensual_end: consensual_end,
    children_live_with: children_live_with,
    partner_monthly_income: partner_monthly_income,
    been_victim_aggression: been_victim_aggression,
    detail_aggression: detail_aggression
  };
  const createdDoc = await createDocument(newDoc);
}