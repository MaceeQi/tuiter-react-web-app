import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: 'Macee',
    lastName: 'Qi',
    handle: '@maceeqi',
    profilePicture: 'profile-photo.png',
    bannerPicture: 'banner.jpg',
    bio: 'Aspiring software engineer that loves to travel, explore new places, and learn about ancient history. In my free time you can find me cooking, spending time with family, or watching TV in Chinese (currently learning Mandarin!).',
    website: '',
    location: 'Boston, MA',
    dateOfBirth: 'January 1, 1996',
    dateJoined: 'September 2022',
    followingCount: 340,
    followersCount: 223,
    tuits: 6154
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        editProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.birthdate
        }
    }
});
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;