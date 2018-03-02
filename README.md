# yeti_hash_code_2018

We folks tried to brute force a good enough solution randomly shuffling the inputs and assigning them to cars. Next steps in the algorithm would include halting bad simulation, and trying basic sorting solution based on reasonable doubt.

The idea was: we know how basic operations should do, but we don't have time nor can guarantee a decently optimized output in less than 3 hours. It didn't work bad, but won't recommend doing brute force in other hashcode editions, since the large datasets are indeed large.

A basic aspect we did not worry about was ensuring a car had as little idle time as possible, so a car would wait for the next ride arbitrarily, instead of considering taking other rides offered at the same time, thus potentially loosing lots of rides per car.

[Problem statement](https://github.com/luisfpinto/yeti_hash_code_2018/blob/master/online_qualification_round_2018.pdf)
