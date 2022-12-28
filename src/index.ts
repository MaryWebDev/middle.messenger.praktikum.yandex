import { renderDOM, registerComponent } from './core';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ServerErrorPage from './pages/ServerErrorPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import EditPasswordPage from './pages/EditPasswordPage';
import EditProfilePage from './pages/EditeProfilePage';
import ChatPage from './pages/ChatPage';
import Button from './components/button';
import Input from './components/input';
import Stub from './components/stub';
import Icon from './components/icon';
import Modal from './components/modal';
import InputProfile from './components/inputProfile';
import Chat from './components/chat';

import './app.css';

registerComponent(Button);
registerComponent(Input);
registerComponent(Stub);
registerComponent(Icon);
registerComponent(Modal);
registerComponent(InputProfile);
registerComponent(Chat);

const pagesComponents = [
  new LoginPage(),
  new SignUpPage(),
  new ProfilePage(),
  new EditProfilePage(),
  new EditPasswordPage(),
  new ChatPage(),
  new NotFoundPage(),
  new ServerErrorPage()
];

document.querySelectorAll('a').forEach((link, i) => {
  link.onclick = (e) => {
    e.preventDefault();
    renderDOM(pagesComponents[i]);
    return false;
  }
})
