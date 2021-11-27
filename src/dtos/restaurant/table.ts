import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RestaurantSeatingPlanDto } from './seatingPlan';
export class CreateRestaurantTableDto {
  @IsNotEmpty()
  @IsString()
  public status!: string;

  @IsNumber()
  @IsNotEmpty()
  public number!: number;

  @IsNumber()
  @IsNotEmpty()
  public maxSize!: number;
}

export class RestaurantTableDto extends CreateRestaurantTableDto {
  public declare seatingPlans: RestaurantSeatingPlanDto[];

  public id!: string;
}
