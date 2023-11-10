import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UserNotFound } from "../Errors";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new UserNotFound();
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
