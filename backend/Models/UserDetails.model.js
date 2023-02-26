const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userDetailsSchema = new Schema({
  cell: {
    type: String,
  },
  dob: {
    age: {
      type: Number,
    },
    date: { type: Date,},
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  userId: {
    name: {
      type: String,

    },
    value: {
      type: String,

    },
  },
  location: {
    street: {
      name: {
        type: String,

      },
      number: {
        type: Number,

      },
    },
    city: {
      type: String,

    },
    state: {
      type: String,

    },
    country: {
      type: String,

    },
    postcode: {
      type: String,

    },
    coordinates: {
      latitude: {
        type: String,

      },
      longitude: {
        type: String,

      },
    },
    timezone: {
      offset: {
        type: String,

      },
      description: {
        type: String,

      },
    },
  },
  login: {
    uuid: {
      type: String,

    },
    username: {
      type: String,

    },
    password: {
      type: String,

    },
    salt: {
      type: String,

    },
    md5: {
      type: String,

    },
    sha1: {
      type: String,

    },
    sha256: {
      type: String,

    },
  },
  name: {
    title: {
      type: String,

    },
    first: {
      type: String,

    },
    last: {
      type: String,

    },
  },
  nat: {
    type: String,
  },
  phone: {
    type: String,
  },
  picture: {
    large: {
      type: String,

    },
    medium: {
      type: String,

    },
    thumbnail: {
      type: String,

    },
  },
  registered: {
    date: {
      type: Date,

    },
    age: {
      type: Number,

    },
  },
}, {
    versionKey : false,
    timestamps : true
});

const userDetailsModel = mongoose.model("user-detail", userDetailsSchema);

module.exports = { userDetailsModel };
