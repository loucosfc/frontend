import socketIoClient from 'socket.io-client';

class WebSocketService {
  constructor() {
    const socket = socketIoClient(process.env.REACT_APP_API_URL);
    this.setSocket(socket);
  }

  getSocket() {
    return this.socket;
  }

  setSocket(socket) {
    this.socket = socket;
  }
}

export default new WebSocketService();
