const { Builder, By, Key, until } = require('selenium-webdriver')
//import data
const data = require('./data/data')
const regData = require('./data/registrationData')
//imports utils
const sleep = require('./utils/sleep')
//import objects
const {
  genderSelection,
  fisrtName,
  lastName,
  password,
  address,
  city,
  stateAlabama,
  postcode,
  mobile,
  address_alias,
  btn_submit_register,
  btn_logout,
} = require('./objectModel/registeration')
const { login } = require('./objectModel/mainPage')
const { emailField, submitBtn } = require('./objectModel/authPage')

async function registerUser() {
  let driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.get(data.websiteUrl)
    await driver.wait(until.titleIs(data.title), 10000)
    await driver.findElement(By.className(login)).click()
    await driver.findElement(By.id(emailField)).sendKeys(data.email, Key.RETURN)
    await driver.findElement(By.id(submitBtn)).click()
    await sleep(5000)
    await driver.findElement(By.id(genderSelection)).click()
    await driver.findElement(By.id(fisrtName)).sendKeys(regData.firstName)
    await driver.findElement(By.id(lastName)).sendKeys(regData.lastName)
    await driver.findElement(By.id(password)).sendKeys(regData.password)
    await driver.findElement(By.id(address)).sendKeys(regData.address)
    await driver.findElement(By.id(city)).sendKeys(regData.city)
    await driver.findElement(By.xpath(stateAlabama)).click()
    await driver.findElement(By.id(postcode)).sendKeys(regData.postcode)
    await driver.findElement(By.id(mobile)).sendKeys(regData.mobile)
    await driver.findElement(By.id(address_alias)).sendKeys(regData.address)
    await driver.findElement(By.id(btn_submit_register)).click()
    await driver.wait(until.elementLocated(By.className(btn_logout)), 10000)
  } finally {
    await sleep(3000)
    await driver.quit()
  }
}

registerUser()
