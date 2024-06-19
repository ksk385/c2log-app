import { connect } from "node:http2";

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
  console.dir(user);
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
