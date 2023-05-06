import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository copy";
import { SearchGymsUseCase } from "../search-gyms";

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository();
  const useCase = new SearchGymsUseCase(gymsRepository);

  return useCase;
}
