import React from "react";
import { DateTime } from "luxon";

import fb from "./components/firebase";

const DEFAULT_STATE = {
  notifications: [],
  journal: [],
  isLoggedIn: false,
  user: null,
  appLoading: false
};

export const AppContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;

  addNotification = async type => {
    const notifi = getNotificationContentByType(type);
    this.setState({
      notifications: [...this.state.notifications, notifi]
    });
  };

  removeNotification = async id => {
    const newArr = [...this.state.notifications].filter(n => n.id !== id);
    this.setState({ notifications: newArr });
  };

  setLoggedIn = payload => {
    this.setState({
      isLoggedIn: !!payload,
      user: payload
    });
  };

  getJournal = async payload => {
    this.setState({ appLoading: true });

    if (!this.state.user) {
      this.setState({ appLoading: false });
      return;
    }

    const uid = this.state.user.uid;

    fb.journal(uid).on("value", snap => {
      this.setState({ appLoading: false });
      if (!snap.val()) {
        this.setState({ journal: [] });
        return;
      }
      this.setState({ journal: fb.toArray(snap.val()) || [] });
    });
  };

  updateJournal = async payload => {
    const today = DateTime.local().toISODate();
    const uid = this.state.user.uid;

    await fb.journal(uid).update({
      [today]: {
        success: payload
      }
    });
  };

  createUser = async payload => {
    const registeredAt = DateTime.local().toISODate();

    await fb.user(payload.uid).set({
      registeredAt
    });

    this.addNotification("REGISTER");
    setTimeout(() => {
      this.addNotification("REGISTER_INSTRUCTIONS");
    }, 4000);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addNotification: this.addNotification,
          removeNotification: this.removeNotification,
          setLoggedIn: this.setLoggedIn,
          createUser: this.createUser,
          updateJournal: this.updateJournal,
          getJournal: this.getJournal
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const getNotificationContentByType = type => {
  switch (type) {
    case "CONFIRM":
      return {
        id: new Date(),
        type,
        content: "Yay, you resisted fatness today!"
      };
    case "REGISTER": {
      return {
        id: new Date(),
        type,
        content:
          "Welcome, fat one! Hope you're not as weak as the last one who registered."
      };
    }
    case "REGISTER_INSTRUCTIONS": {
      return {
        id: new Date(),
        type,
        content:
          "Confirm your lack of sweets every day by pressing the button in the bottom left corner."
      };
    }
    default:
      return {
        id: new Date(),
        type,
        content: `Unknown notification type ${type}`
      };
  }
};
