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
    },
    getBorderColor(colorString, increaseAmount) {
      const colorStringArray = colorString.split("-");
      const colorAMount = parseInt(colorStringArray[2]);
      return `border-${colorStringArray[1]}-${increaseAmount ? colorAMount + 300 : colorAMount}`
    },
    getTextColor(colorString, increaseAmount) {
      const colorStringArray = colorString.split("-");
      const colorAMount = parseInt(colorStringArray[2]);
      return `text-${colorStringArray[1]}-${increaseAmount ? colorAMount + 400 : colorAMount}`
    }
  }

}
