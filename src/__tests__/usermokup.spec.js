import { describe, expect, it, jest } from '@jest/globals';
import { getUserdetailByID } from '../handler/handler.mjs';

const setreq = {
  params: {
    id: '1', // Mock the `id` as a string, since `req.params` typically contains string values
  },
};

const setres = {
  status: jest.fn().mockReturnThis(), // Mock `status` to chain calls
  send: jest.fn(),                    // Mock `send` to track calls
};

describe("get user", () => {
  it("1st job", () => {
    getUserdetailByID(setreq, setres);
    expect(setres.status).toHaveBeenCalledWith(200); // Expect a 200 status code
    expect(setres.send).toHaveBeenCalled();          // Verify that `send` is called
  });

  it("2nd job", () => {
    const mockSetreq = { ...setreq, params:{ id: '100' }}
    getUserdetailByID(mockSetreq, setres);
    expect(setres.status).toHaveBeenCalledWith(404);
    expect(setres.send).toHaveBeenCalled();
    expect(setres.send).toHaveBeenCalledTimes(1);
  });
});
