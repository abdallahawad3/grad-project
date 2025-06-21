import { axiosInstance } from "@/config/axios.config";
import type { ApiErrorResponse } from "@/interface";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface IAddressResponse {
  message: string;
  data: {
    alias: string;
    details: string;
    phone: string;
    postalCode: string;
    _id: string;
  }[];
}

interface IAddressRequest {
  alias: string;
  details: string;
  phone: string;
  postalCode: string;
}

const addNewAddress = async (
  addressData: IAddressRequest
): Promise<IAddressResponse> => {
  const { data } = await axiosInstance.post<IAddressResponse>(
    "/addresses",
    addressData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
};

const useAddAddress = (): UseMutationResult<
  IAddressResponse,
  AxiosError<ApiErrorResponse>,
  IAddressRequest
> => {
  const mutation = useMutation<
    IAddressResponse,
    AxiosError<ApiErrorResponse>,
    IAddressRequest
  >({
    mutationKey: ["add-address"],
    mutationFn: (addressData: IAddressRequest) => addNewAddress(addressData),
  });
  return mutation;
};

export default useAddAddress;
