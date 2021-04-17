import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCatDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly age: number;
}
