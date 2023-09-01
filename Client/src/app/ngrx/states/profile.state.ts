import { Profile } from 'src/app/models/Profile.model';

export interface ProfileState {
  profile: Profile;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
  isGetLoading: boolean;
  isGetSuccess: boolean;
  getErrorMessage: string;
}