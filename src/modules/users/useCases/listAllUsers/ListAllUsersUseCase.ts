import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UserNotAllowed } from "../Errors";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      throw new UserNotAllowed();
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
