// auth
export const TOGGLE_AUTH_DIALOG = 'TOGGLE_AUTH_DIALOG'
export const SET_RESET_PASSWORD_TOKEN = 'SET_RESET_PASSWORD_TOKEN'
export const SET_AUTH_DIALOG_FORM_TYPE = 'SET_AUTH_DIALOG_FORM_TYPE'
export const SET_AUTH_DIALOG_REDIRECTION_AFTER_SIGNUP = 'SET_AUTH_DIALOG_REDIRECTION_AFTER_SIGNUP'
export const SET_AUTH_DIALOG_ACTION = 'SET_AUTH_DIALOG_ACTION'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_NATURAL_USER = 'SET_NATURAL_USER'
export const SET_ORGANIZATIONS = 'SET_ORGANIZATIONS'
export const SET_IS_NEW_USER = 'SET_IS_NEW_USER'

// validation
export const TOGGLE_VALIDATION_DIALOG = 'TOGGLE_VALIDATION_DIALOG'
export const SET_VALIDATION_DIALOG_DATA = 'SET_VALIDATION_DIALOG_DATA'
export const SET_VALIDATION_DIALOG_FORM_TYPE = 'SET_VALIDATION_DIALOG_FORM_TYPE'
export const SET_USER_LOCATION = 'SET_USER_LOCATION'

// user
export const SET_SELECTED_USER = 'SET_SELECTED_USER'

// asset
export const SET_ASSET = 'SET_ASSET'
export const SET_AVAILABILITIES = 'SET_AVAILABILITIES'
export const SET_AVAILABILITY_GRAPH = 'SET_AVAILABILITY_GRAPH'
export const SET_ACTIVE_ASSET = 'SET_ACTIVE_ASSET'
export const SET_USER_ASSETS = 'SET_USER_ASSETS'

// search
export const TOGGLE_SEARCH_MAP = 'TOGGLE_SEARCH_MAP'
export const TOGGLE_FILTER_DIALOG = 'TOGGLE_FILTER_DIALOG'
export const HIDE_FILTER_DIALOG = 'HIDE_FILTER_DIALOG'

export const SET_SEARCHING_ASSETS = 'SET_SEARCHING_ASSETS'
export const SET_SEARCH_MODE = 'SET_SEARCH_MODE'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const SET_PRICE_RANGE = 'SET_PRICE_RANGE'
export const SET_DISPLAY_PRICE_RANGE = 'SET_DISPLAY_PRICE_RANGE'
export const SET_SEARCH_DATES = 'SET_SEARCH_DATES'
export const SET_SEARCH_LOCATION = 'SET_SEARCH_LOCATION'
export const UNSET_SEARCH_LOCATION = 'UNSET_SEARCH_LOCATION'
export const SEARCH__SET_MAP_OPTIONS = 'SEARCH__SET_MAP_OPTIONS'
export const SEARCH__SET_ASSETS = 'SEARCH__SET_ASSETS'
export const SEARCH__SET_USERS = 'SEARCH__SET_USERS'
export const SEARCH__SET_SEARCH_FILTERS = 'SEARCH__SET_SEARCH_FILTERS'
export const SEARCH__SET_PAGINATION_META = 'SEARCH__SET_PAGINATION_META'
export const SEARCH__SET_ASSET_TYPES = 'SEARCH__SET_ASSET_TYPES'

// common resources
export const SET_ASSET_TYPES = 'SET_ASSET_TYPES'
export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_FETCHING_CATEGORIES = 'SET_FETCHING_CATEGORIES'
export const SET_ROLES = 'SET_ROLES'
export const SET_CUSTOM_ATTRIBUTES = 'SET_CUSTOM_ATTRIBUTES'
export const SET_CONFIG = 'SET_CONFIG'

// content
export const SET_LOCAL_ENTRIES = 'SET_LOCAL_ENTRIES'
export const SET_API_ENTRIES = 'SET_API_ENTRIES'
export const SET_LOCALE = 'SET_LOCALE'
export const SET_CURRENCY = 'SET_CURRENCY'
export const FETCHING_CONTENT = 'FETCHING_CONTENT'
export const ROUTES_ADDED = 'ROUTES_ADDED'
export const SET_APP_UPDATE_AVAILABLE = 'SET_APP_UPDATE_AVAILABLE'
export const SET_ACCEPT_WEBP = 'SET_ACCEPT_WEBP'
export const SET_CONTENT_UPDATED_DATE = 'SET_CONTENT_UPDATED_DATE'
// used by live content editor
export const SET_CONTENT_EDITING = 'SET_CONTENT_EDITING'
export const SELECT_ENTRY = 'SELECT_ENTRY'
export const EDIT_ENTRY = 'EDIT_ENTRY'
export const RESET_EDITING_ENTRIES = 'RESET_EDITING_ENTRIES'

// layout
export const LAYOUT__TOGGLE_MENU = 'LAYOUT__TOGGLE_MENU'
export const LAYOUT__TOGGLE_LEFT_DRAWER = 'LAYOUT__TOGGLE_LEFT_DRAWER'
export const LAYOUT__SET_PAGE_BLURRED = 'LAYOUT__SET_PAGE_BLURRED'

// style
export const SET_STYLE = 'SET_STYLE'

// inbox
export const SET_MESSAGES = 'SET_MESSAGES'
export const SET_CONVERSATION = 'SET_CONVERSATION'
export const INBOX__SET_USERS = 'INBOX__SET_USERS'
export const INBOX__SET_TRANSACTIONS = 'INBOX__SET_TRANSACTIONS'
export const INBOX__SET_ASSETS = 'INBOX__SET_ASSETS'
export const INBOX__SET_ORDERS = 'INBOX__SET_ORDERS'

// rating
export const SET_RATING_STATS_BY_TARGET_ID = 'SET_RATING_STATS_BY_TARGET_ID'
export const SET_RATING_STATS_BY_ASSET_ID = 'SET_RATING_STATS_BY_ASSET_ID'
export const SET_RATED_TRANSACTIONS = 'SET_RATED_TRANSACTIONS'

// transaction
export const SET_TRANSACTION_OPTIONS = 'SET_TRANSACTION_OPTIONS'
export const SET_TRANSACTION_PREVIEW = 'SET_TRANSACTION_PREVIEW'

// cart (used only if process.env.VUE_APP_MARKETPLACE_TYPE === 'ecommerce')
export const CART__SET_LOCAL_CART = 'CART__SET_LOCAL_CART'
export const CART__SET_PREVIEWED_TRANSACTIONS = 'CART__SET_PREVIEWED_TRANSACTIONS'
export const CART__SET_OWNER = 'CART__SET_OWNER'
export const CART__SET_PRICES = 'CART__SET_PRICES'
