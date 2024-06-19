export const addOrder = async (args, context) => {
  const user = await context.entities.User.findUnique({
    where: { id: args.userId },
    include: {
      pharmacy: {
        include: {
          log: true,
        },
      },
    },
  });
  return await context.entities.Entries.create({
    data: {
      ndc: args.ndc,
      quantity: parseInt(args.quantity),
      entryId: args.entryId,
      log: {
        connect: {
          id: user.pharmacy.log.id,
        },
      },
    },
  });
};

export const authorizeUser = async (args, context) => {
  const user = await context.entities.User.findUnique({
    where: { id: args.userId },
  });
  if (user.pin === parseInt(args.pinCode)) {
    return true;
  } else {
    throw new Error("Invalid PIN");
  }
};
