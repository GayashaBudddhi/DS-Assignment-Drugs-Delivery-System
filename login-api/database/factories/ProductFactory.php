<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'pro_name' => $this->faker->text(10),
            'pro_code'=> $this->faker->text(5),
            'cat_id'=> $this->faker->unique()->randomNumber,
            'pro_info' =>$this->faker->text(100),
            'pro_price' => $this->faker->numberBetween(1-1000)
        ];
    }
}
