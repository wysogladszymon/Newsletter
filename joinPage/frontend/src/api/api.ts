import { backendAddress } from "../assets/backendAddress";

export interface Response {
  status: Status;
  msg: string;
}

export type Status = 'Error' | 'Success';

export const addEmailToDB = async (email: string): Promise<Response> => {
  try {
    if (!email){
      throw new Error(`You need to specify email`);
    }
    const response = await fetch(`${backendAddress}api/User/${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: Response = await response.json();
    return responseData;
    
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Some error occurred');
  }
};
