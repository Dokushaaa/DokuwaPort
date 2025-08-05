"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	error?: boolean;
	info?: boolean;
	success?: boolean;
	message?: string;
	isSave?: boolean;
	isShow?: boolean;
	isArchive?: boolean;
	isRestore?: boolean;
	isDelete?: boolean;
	isAdd?: boolean;
	isActive?: boolean;
	isEdit?: boolean;
	isLoading?: boolean;
	isFetching?: boolean;
	isLogin?: boolean;
	isSearch?: Record<string, any>;
	credentials?: Record<string, any>;
	// value?: number;
};

const initialState: State = {
	error: false,
	info: false,
	success: false,
	message: "",
	isSave: false,
	isShow: false,
	isArchive: false,
	isRestore: false,
	isDelete: false,
	isAdd: false,
	isActive: false,
	isEdit: false,
	isLoading: false,
	isFetching: false,
	isLogin: false,
	isSearch: {},
	credentials: {},
	// value: 0,
};

export const mainRedux = createSlice({
	name: "redux",
	initialState,
	reducers: {
		setError(state, action: PayloadAction<boolean>) {
			state.error = action.payload;
		},
		setInfo(state, action: PayloadAction<boolean>) {
			state.info = action.payload;
		},
		setMessage(state, action: PayloadAction<string>) {
			state.message = action.payload;
		},
		setSuccess(state, action: PayloadAction<boolean>) {
			state.success = action.payload;
		},
		setSave(state, action: PayloadAction<boolean>) {
			state.isSave = action.payload;
		},
		setIsShow(state, action: PayloadAction<boolean>) {
			state.isShow = action.payload;
		},
		setIsArchive(state, action: PayloadAction<boolean>) {
			state.isArchive = action.payload;
		},
		setIsRestore(state, action: PayloadAction<boolean>) {
			state.isRestore = action.payload;
		},
		setIsDelete(state, action: PayloadAction<boolean>) {
			state.isDelete = action.payload;
		},
		setIsAdd(state, action: PayloadAction<boolean>) {
			state.isAdd = action.payload;
		},
		setIsSearch(state, action: PayloadAction<Record<string, any>>) {
			state.isSearch = action.payload;
		},
		setIsEdit(state, action: PayloadAction<boolean>) {
			state.isEdit = action.payload;
		},
		setIsActive(state, action: PayloadAction<boolean>) {
			state.isActive = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setIsFetching(state, action: PayloadAction<boolean>) {
			state.isFetching = action.payload;
		},
		setIsLogin(state, action: PayloadAction<boolean>) {
			state.isLogin = action.payload;
		},
		setCredentials(state, action: PayloadAction<Record<string, any>>) {
			state.credentials = action.payload;
		},
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.value = action.payload;
		// },
	},
});

export const {
	setError,
	setInfo,
	setMessage,
	setSuccess,
	setSave,
	setIsShow,
	setIsArchive,
	setIsRestore,
	setIsDelete,
	setIsAdd,
	setIsSearch,
	setIsEdit,
	setIsActive,
	setIsLoading,
	setIsFetching,
	setIsLogin,
	setCredentials,
} = mainRedux.actions;

export default mainRedux.reducer;
