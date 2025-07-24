const sizes = {
  // Border radius
  borderRadius: 12,
  borderRadiusNone: 0,
  borderRadiusXS: 2,
  borderRadiusSmall: 6,
  borderRadiusMedium: 10,
  borderRadiusLarge: 20,
  borderRadiusXL: 32,

  // Border width & style
  borderWidthThin: 1,
  borderWidthMedium: 2,
  borderWidthThick: 4,
  borderStyle: "solid",
  borderColor: "#e0e0e0",

  // Padding
  paddingNone: 0,
  paddingXXS: 2,
  paddingXS: 4,
  paddingSM: 8,
  paddingMD: 16,
  paddingLG: 24,
  paddingXL: 32,
  paddingXXL: 48,
  paddingSection: 64,

  // Margin
  marginNone: 0,
  marginXXS: 2,
  marginXS: 4,
  marginSM: 8,
  marginMD: 16,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  marginSection: 64,

  // Font sizes
  fontSizeXXS: 8,
  fontSizeXS: 10,
  fontSizeSM: 12,
  fontSizeMD: 14,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeXXL: 24,
  fontSizeDisplay: 32,
  fontSizeHero: 40,
  fontSizeHuge: 56,
  fontSizeCaption: 11,
  fontSizeButton: 15,
  fontSizeOverline: 10,

  // Font weights
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  // Line heights
  lineHeightTight: 1.1,
  lineHeightNormal: 1.5,
  lineHeightRelaxed: 1.8,
  lineHeightHeading: 1.2,
  lineHeightButton: 1.75,
  lineHeightInput: 1.5,

  // Letter spacing
  letterSpacingNormal: 0,
  letterSpacingWide: 0.5,
  letterSpacingWider: 1,
  letterSpacingTight: -0.5,

  // Icon sizes
  iconSizeXXS: 8,
  iconSizeXS: 12,
  iconSizeSM: 16,
  iconSizeMD: 20,
  iconSizeLG: 24,
  iconSizeXL: 32,
  iconSizeXXL: 48,
  iconSizeHuge: 64,

  // Button
  buttonHeightXS: 24,
  buttonHeightSM: 32,
  buttonHeightMD: 40,
  buttonHeightLG: 48,
  buttonHeightXL: 56,
  buttonPaddingX: 24,
  buttonPaddingY: 8,
  buttonMinWidth: 64,
  buttonFontSize: 16,
  buttonIconSpacing: 8,
  buttonBorderRadius: 8,
  buttonElevation: 2,

  // Input
  inputHeightXS: 24,
  inputHeightSM: 32,
  inputHeightMD: 40,
  inputHeightLG: 48,
  inputHeightXL: 56,
  inputPaddingX: 12,
  inputPaddingY: 8,
  inputFontSize: 16,
  inputBorderWidth: 1,
  inputBorderRadius: 8,
  inputElevation: 0,

  // Chip
  chipRadius: 8,
  chipHeightSM: 24,
  chipHeight: 32,
  chipHeightLG: 40,
  chipFontSize: 14,
  chipPaddingX: 12,
  chipPaddingY: 4,
  chipElevation: 1,

  // Avatar
  avatarXXS: 16,
  avatarXS: 24,
  avatarSM: 32,
  avatarMD: 40,
  avatarLG: 56,
  avatarXL: 72,
  avatarXXL: 96,
  avatarBorderWidth: 2,

  // AppBar
  appBarHeight: 64,
  appBarHeightMobile: 56,
  appBarElevation: 4,

  // Card
  cardRadius: 16,
  cardPadding: 24,
  cardHeaderHeight: 56,
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
  listItemAvatarSize: 40,
  listSubheaderFontSize: 13,

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
  drawerWidthMini: 72,
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

  // Divider
  dividerThickness: 1,
  dividerMarginY: 12,
  dividerColor: "#e0e0e0",

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
  shadowXS: "0 1px 2px rgba(0,0,0,0.08)",
  shadowSM: "0 2px 4px rgba(0,0,0,0.10)",
  shadowMD: "0 4px 8px rgba(0,0,0,0.12)",
  shadowLG: "0 8px 24px rgba(0,0,0,0.16)",
  shadowXL: "0 16px 48px rgba(0,0,0,0.20)",
  shadowXXL: "0 32px 96px rgba(0,0,0,0.24)",

  // Animation
  durationFast: "150ms",
  durationNormal: "300ms",
  durationSlow: "600ms",
  durationExtraSlow: "1200ms",
  delayShort: "50ms",
  delayNormal: "150ms",
  delayLong: "300ms",
  easingStandard: "ease",
  easingDecelerate: "cubic-bezier(0.0,0,0.2,1)",
  easingAccelerate: "cubic-bezier(0.4,0,1,1)",

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
  containerMaxWidthSM: 600,
  containerMaxWidthMD: 900,
  containerMaxWidthLG: 1200,
  containerMaxWidthXL: 1536,

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
  gridGutterSM: 16,
  gridGutterXS: 8,

  // Container
  containerPadding: 24,
  containerRadius: 12,

  // Image
  imageRadius: 12,
  imageShadow: "0 4px 16px rgba(0,0,0,0.10)",

  // Video
  videoRadius: 12,
  videoShadow: "0 4px 16px rgba(0,0,0,0.10)",

  // Progress
  progressThickness: 4,
  progressRadius: 8,
  progressTrackColor: "#e0e0e0",
  progressBarColor: "#1976d2",

  // Badge
  badgeSize: 20,
  badgeFontSize: 10,
  badgeBorderWidth: 2,

  // Notification
  notificationRadius: 8,
  notificationPadding: 16,
  notificationFontSize: 14,

  // Modal
  modalRadius: 16,
  modalPadding: 32,
  modalElevation: 24,

  // Popover
  popoverRadius: 12,
  popoverPadding: 16,
  popoverElevation: 8,

  // Menu
  menuRadius: 8,
  menuPadding: 8,
  menuElevation: 8,

  // Pagination
  paginationItemSize: 36,
  paginationFontSize: 14,
  paginationRadius: 8,

  // Breadcrumb
  breadcrumbFontSize: 13,
  breadcrumbSeparatorSize: 18,

  // Timeline
  timelineDotSize: 16,
  timelineConnectorThickness: 2,
  timelineItemPaddingY: 24,

  // Masonry
  masonryGutter: 16,

  // Overlay
  overlayDark: "rgba(0,0,0,0.7)",
  overlayLight: "rgba(255,255,255,0.5)",
  overlayBlurStrong: 16,
  overlayBlurLight: 4,

  // Modal backdrop
  modalBackdropColor: "rgba(0,0,0,0.6)",
  modalBackdropBlur: 12,

  // Notification badge
  notificationBadgeSize: 10,
  notificationBadgeOffsetX: 2,
  notificationBadgeOffsetY: 2,

  // AppBar
  appBarShadow: "0 2px 8px rgba(0,0,0,0.10)",
  appBarZIndex: 1201,

  // Grid
  gridColumns: 12,
  gridRowGap: 24,
  gridColumnGap: 24,
  gridRowGapSM: 16,
  gridColumnGapSM: 16,

  // Image
  imageAspectRatio: 16 / 9,
  imageMaxWidth: 800,
  imageMaxHeight: 600,

  // Video
  videoAspectRatio: 16 / 9,
  videoMaxWidth: 1280,
  videoMaxHeight: 720,

  // Progress
  progressAnimationDuration: "1.2s",
  progressBarHeight: 6,

  // Badge
  badgeOffsetX: 4,
  badgeOffsetY: 4,

  // Timeline
  timelineLineThickness: 3,
  timelineDotBorderWidth: 2,

  // Masonry
  masonryColumnGap: 24,
  masonryRowGap: 24,

  // Menu
  menuItemHeight: 40,
  menuItemFontSize: 15,
  menuItemPaddingX: 16,
  menuItemPaddingY: 8,

  // Popover
  popoverArrowSize: 12,

  // Scrollbar
  scrollbarThumbHoverColor: "#757575",
  scrollbarTrackHoverColor: "#eeeeee",

  // Skeleton
  skeletonAnimationDuration: "1.5s",

  // Stepper
  stepIconBorderWidth: 2,

  // Tabs
  tabMinWidth: 72,
  tabMaxWidth: 264,

  // Pagination
  paginationGap: 8,

  // Breadcrumb
  breadcrumbItemSpacing: 8,

  // Divider
  dividerVerticalThickness: 2,

  // Card
  cardMediaAspectRatio: 4 / 3,
};

export default sizes;
