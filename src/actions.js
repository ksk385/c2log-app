import { connect } from "node:http2";

export const addOrder = async (args, context) => {
  const user = context.entities.User.findUnique({
    where: { id: args.userId },
    include: {
      pharmacy: {
        include: {
          log: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
  return context.entities.Entries.create({
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
