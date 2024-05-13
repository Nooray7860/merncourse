const Login = (update) => {
  update(true);
};

let login = false;

const updateLogin = (newValue) => {
  login = newValue;
};

Login(updateLogin);

console.log(login);
