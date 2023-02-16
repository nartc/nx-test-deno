import { myDenoLib } from './my-deno-lib.ts';
import { assertEquals } from 'https://deno.land/std@0.172.0/testing/asserts.ts';

Deno.test('should return "my-deno-lib"', () => {
  assertEquals(myDenoLib(), 'my-deno-lib');
});
