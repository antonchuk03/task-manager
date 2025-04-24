export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).send({ message: 'User is not found' });
        }

        if (req.user.role !== 'admin') {
            return res.status(500).json({
                message: 'You are not authorized to perform this action',
            });
        }

        next();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};
