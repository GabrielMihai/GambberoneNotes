export const ColorMixin = {
  methods: {

    getDifferentColorAmount(colorString, newAmount) {
      const colorStringArray = colorString.split("-");
      return `${colorStringArray[0]}-${colorStringArray[1]}-${newAmount}`
    },
    getHoveredColor(colorString) {
      const colorStringArray = colorString.split("-");
      const colorAmount = parseInt(colorStringArray[2]);
      return `${colorStringArray[0]}-${colorStringArray[1]}-${colorAmount + 200}`
    }
  }

}
