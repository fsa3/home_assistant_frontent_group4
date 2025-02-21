/**
 * Broadcast connection status updates
 */

import type { HASSDomEvent } from "../common/dom/fire_event";
import { fireEvent } from "../common/dom/fire_event";

export type ConnectionStatus = "connected" | "auth-invalid" | "disconnected";

declare global {
  // for fire event
  interface HASSDomEvents {
    "connection-status": ConnectionStatus;
  }

  interface GlobalEventHandlersEventMap {
    "connection-status": HASSDomEvent<ConnectionStatus>;
  }
}

export const broadcastConnectionStatus = (status: ConnectionStatus) => {
  fireEvent(window, "connection-status", status);
};
