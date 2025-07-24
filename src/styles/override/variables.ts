const variables = {
  // Border radius
  borderRadius: 12,

  // Border width & style
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#e0e0e0",

  // Padding
  padding: 16,
  paddingSection: 64,

  // Margin
  margin: 16,
  marginSection: 64,

  // Font sizes
  fontSize: 14,
  fontSizeDisplay: 32,
  fontSizeCaption: 11,
  fontSizeButton: 15,

  // Font weights
  fontWeight: 400,
  fontWeightBold: 700,

  // Line height
  lineHeight: 1.5,

  // Icon size
  iconSize: 24,

  // Button
  buttonHeight: 40,
  buttonPaddingX: 24,
  buttonPaddingY: 8,
  buttonMinWidth: 64,
  buttonFontSize: 16,
  buttonBorderRadius: 8,
  buttonElevation: 2,

  // Input
  inputHeight: 40,
  inputPaddingX: 12,
  inputPaddingY: 8,
  inputFontSize: 16,
  inputBorderWidth: 1,
  inputBorderRadius: 8,

  // Chip
  chipRadius: 8,
  chipHeight: 32,
  chipFontSize: 14,
  chipPaddingX: 12,

  // Avatar
  avatarSize: 40,
  avatarBorderWidth: 2,

  // AppBar
  appBarHeight: 64,
  appBarShadow: "0 2px 8px rgba(0,0,0,0.10)",
  appBarZIndex: 1201,

  // Card
  cardRadius: 16,
  cardPadding: 24,
  cardElevation: 8,
  cardMediaHeight: 200,

  // Paper
  paperRadius: 12,
  paperPadding: 20,
  paperElevation: 4,

  // List
  listItemHeight: 48,
  listItemPadding: 16,
  listItemIconSize: 24,

  // Table
  tableRowHeight: 48,
  tableCellPadding: 16,
  tableHeaderFontSize: 16,
  tableBodyFontSize: 14,
  tableBorderWidth: 1,
  tableRadius: 8,

  // Tooltip
  tooltipFontSize: 12,
  tooltipPadding: 8,
  tooltipRadius: 6,
  tooltipElevation: 2,

  // Drawer
  drawerWidth: 280,
  drawerElevation: 16,

  // Stepper
  stepIconSize: 24,
  stepConnectorThickness: 2,
  stepLabelFontSize: 14,
  stepperPadding: 16,

  // Tabs
  tabHeight: 48,
  tabFontSize: 16,
  tabIndicatorHeight: 3,
  tabRadius: 8,

  // Snackbar
  snackbarHeight: 48,
  snackbarFontSize: 14,
  snackbarRadius: 8,
  snackbarElevation: 6,

  // Skeleton
  skeletonRadius: 8,
  skeletonHeight: 24,
  skeletonAnimationDuration: "1.5s",

  // Divider
  dividerThickness: 1,
  dividerMarginY: 12,
  dividerColor: "#e0e0e0",
  dividerVerticalThickness: 2,

  // Z-index
  zIndexAppBar: 1100,
  zIndexDrawer: 1200,
  zIndexModal: 1300,
  zIndexSnackbar: 1400,
  zIndexTooltip: 1500,
  zIndexPopover: 1600,
  zIndexMenu: 1700,
  zIndexNotification: 1800,

  // Shadow
  shadow: "0 4px 8px rgba(0,0,0,0.12)",

  // Animation
  duration: "300ms",
  delay: "150ms",
  easing: "ease",

  // Opacity
  opacityDisabled: 0.38,
  opacityDivider: 0.12,
  opacityBackdrop: 0.5,
  opacityOverlay: 0.7,
  opacityHover: 0.08,

  // Breakpoints
  breakpointXS: 0,
  breakpointSM: 600,
  breakpointMD: 900,
  breakpointLG: 1200,
  breakpointXL: 1536,
  containerMaxWidth: 1200,

  // Overlay
  overlayColor: "rgba(0,0,0,0.5)",
  overlayBlur: 8,

  // Scrollbar
  scrollbarThickness: 8,
  scrollbarRadius: 8,
  scrollbarThumbColor: "#bdbdbd",
  scrollbarTrackColor: "#f5f5f5",

  // Grid
  gridGutter: 24,
  gridColumns: 12,

  // Container
  containerPadding: 24,
  containerRadius: 12,

  // Image
  imageRadius: 12,
  imageShadow: "0 4px 16px rgba(0,0,0,0.10)",
  imageAspectRatio: 16 / 9,
  imageMaxWidth: 800,
  imageMaxHeight: 600,

  // Video
  videoRadius: 12,
  videoShadow: "0 4px 16px rgba(0,0,0,0.10)",
  videoAspectRatio: 16 / 9,
  videoMaxWidth: 1280,
  videoMaxHeight: 720,

  // Progress
  progressThickness: 4,
  progressRadius: 8,
  progressTrackColor: "#e0e0e0",
  progressBarColor: "#1976d2",
  progressAnimationDuration: "1.2s",
  progressBarHeight: 6,

  // Badge
  badgeSize: 20,
  badgeFontSize: 10,
  badgeBorderWidth: 2,
  badgeOffsetX: 4,
  badgeOffsetY: 4,

  // Notification
  notificationRadius: 8,
  notificationPadding: 16,
  notificationFontSize: 14,
  notificationBadgeSize: 10,
  notificationBadgeOffsetX: 2,
  notificationBadgeOffsetY: 2,

  // Modal
  modalRadius: 16,
  modalPadding: 32,
  modalElevation: 24,
  modalBackdropColor: "rgba(0,0,0,0.6)",
  modalBackdropBlur: 12,

  // Popover
  popoverRadius: 12,
  popoverPadding: 16,
  popoverElevation: 8,
  popoverArrowSize: 12,

  // Menu
  menuRadius: 8,
  menuPadding: 8,
  menuElevation: 8,
  menuItemHeight: 40,
  menuItemFontSize: 15,
  menuItemPaddingX: 16,
  menuItemPaddingY: 8,

  // Pagination
  paginationItemSize: 36,
  paginationFontSize: 14,
  paginationRadius: 8,
  paginationGap: 8,

  // Breadcrumb
  breadcrumbFontSize: 13,
  breadcrumbSeparatorSize: 18,
  breadcrumbItemSpacing: 8,

  // Timeline
  timelineDotSize: 16,
  timelineConnectorThickness: 2,
  timelineItemPaddingY: 24,
  timelineLineThickness: 3,
  timelineDotBorderWidth: 2,

  // Masonry
  masonryGutter: 16,
  masonryColumnGap: 24,
  masonryRowGap: 24,

  // Palette
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#e57373",
      dark: "#b71c1c",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
      disabled: "#bdbdbd",
      hint: "#9e9e9e",
      contrast: "#fff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
      appBar: "#222",
      chip: "#e0e0e0",
      avatar: "#bdbdbd",
    },
    border: {
      main: "#e0e0e0",
      dark: "#bdbdbd",
      light: "#eeeeee",
    },
    divider: "#e0e0e0",
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    overlay: "rgba(0,0,0,0.5)",
    white: "#fff",
    black: "#000",
    transparent: "transparent",
  },
};

export default variables;
