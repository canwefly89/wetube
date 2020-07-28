// Glbal
const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

// Users
const USERS = '/users'
const USER_DETAIL = '/:id' // 위 두개를 혼합하면 users/1 이런 식으로 id 부여
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'

// Videos
const VIDEOS = '/videos'
const UPLOAD = '/upload'
const VIDEO_DETAIL = '/:id' // express에서 :id 같은건 변하는 값인걸 알아챔
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'

// make an object
const routes = {
	home: HOME,
	join: JOIN,
	login: LOGIN,
	logout: LOGOUT,
	search: SEARCH,
	users: USERS,
	userDetail: (id) => {
		if (id) {
			return `/users/${id}`
		} else {
			return USER_DETAIL
		}
	},
	editProfile: EDIT_PROFILE,
	changePassword: CHANGE_PASSWORD,
	videos: VIDEOS,
	upload: UPLOAD,
	videoDetail: (id) => {
		if (id) {
			return `/videos/${id}`
		} else {
			return VIDEO_DETAIL
		}
	},
	editVideo: EDIT_VIDEO,
	deleteVideo: DELETE_VIDEO
}

export default routes
