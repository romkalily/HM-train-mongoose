import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsOptional()
  @IsString()
  readonly breed: string;
}
