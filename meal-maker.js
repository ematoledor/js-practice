const menu = {
  _courses: {
    appetizers [],
    mains [],
    desserts [],
  },
  get appetizers() {

  },
  set appetizers(appetizerIn) {

  },
  get mains() {

  },
  set mains(mainsIn) {

  },
    get desserts() {

  },
  set desserts(dessertsIn) {

  },
  const menu = {
    _courses: {},
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    }
  }