require("@testing-library/jest-dom");
const final_hits = require("../src/views");
describe("Hits counter", () => {
    it("Hits should record",async() => {
        const namerepo="test"
        let stats = await final_hits(namerepo);
        expect(stats).toBeGreaterThanOrEqual(1)
});

});