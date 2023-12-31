import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UserNotFound } from "../Errors";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new UserNotFound();
    }

    const updatedUser = this.usersRepository.turnAdmin(user);

    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
