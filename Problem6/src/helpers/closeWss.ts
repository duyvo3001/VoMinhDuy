import { wss } from "../app";

export function closeWebSocketServer() {
    wss.close((error) => {
      if (error) {
        console.error('Lỗi khi đóng WebSocket server:', error);
      } else {
        console.log('WebSocket server đã đóng thành công.');
      }
    });
  }