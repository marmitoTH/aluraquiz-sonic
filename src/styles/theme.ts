import db from '../../db.json'

export default {
  borderRadius: db.theme.borderRadius,
  images: {
    background: db.bg
  },
  colors: {
    primaryColor: db.theme.colors.primary,
    secondaryColor: db.theme.colors.secondary,
    backgroundColor: db.theme.colors.mainBg,
    contrastTextColor: db.theme.colors.contrastText,
    disabledButton: '#979797',
    success: db.theme.colors.success,
    failed: db.theme.colors.wrong
  }
}
