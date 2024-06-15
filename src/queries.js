export const getUserInfo = async (args, context) => {
  return context.entities.User.findUnique({
    where: { id: args.userId },
    include: {
      pharmacy: true,
    },
  });
};
