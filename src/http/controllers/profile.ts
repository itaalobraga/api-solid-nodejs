import { makeGetUserProfileUseCase } from "@/use-cases/factories/get-user-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const getUserProfile = makeGetUserProfileUseCase();

  const { user } = await getUserProfile.execute({
    userId: request.user.sub,
  });

  const { password_hash, ...rest } = user;

  return reply.status(200).send({
    user: rest,
  });
}
