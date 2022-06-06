import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardRepository);
    getAllBoards(): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    deleteBoard(id: number): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}
