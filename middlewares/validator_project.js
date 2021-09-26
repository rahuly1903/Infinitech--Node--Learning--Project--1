const validator = require("validator");

const email = (txtContent) => {
  if (validator.isEmpty(txtContent) || !validator.isEmail(txtContent)) {
    return true;
  } else {
    return false;
  }
};

const password = (txtContent) => {
  if (
    validator.isEmpty(txtContent) ||
    !validator.isAlphanumeric(txtContent, "en-IN") ||
    !validator.isLength(txtContent, { min: 4, max: 8 })
  ) {
    return true;
  } else {
    return false;
  }
};

const username = (txtContent) => {
  if (
    validator.isEmpty(txtContent) ||
    !validator.isLength(txtContent, { min: 4 })
  ) {
    return true;
  } else {
    return false;
  }
};
const mobile = (txtContent) => {
  if (
    validator.isEmpty(txtContent) ||
    !validator.isMobilePhone(txtContent, "en-IN")
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  email,
  password,
  username,
  mobile,
};
