import apiService from "../../api";

const acceptInvitation = async (data) => {
  const response = await apiService.post(
    "/api/friends-nvitations/accept",
    data
  );

  return response.data;
};

const rejectInvitation = async (data) => {
  const response = await apiService.post(
    "/api/friends-nvitations/reject",
    data
  );

  return response.data;
};

const pendingInvitationsService = {
  acceptInvitation,
  rejectInvitation,
};

export default pendingInvitationsService;
