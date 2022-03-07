import apiService from "../../api";

const sendInvitation = async (data) => {
  const response = await apiService.post(
    "/api/friends-nvitations/invite",
    data
  );

  return response.data;
};

const friendsService = {
  sendInvitation,
};

export default friendsService;
