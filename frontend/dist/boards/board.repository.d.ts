import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardRepository extends Repository<Board> {
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
}
